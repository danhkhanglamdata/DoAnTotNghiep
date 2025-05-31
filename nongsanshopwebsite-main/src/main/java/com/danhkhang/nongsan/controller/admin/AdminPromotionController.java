package com.danhkhang.nongsan.controller.admin;

import com.danhkhang.nongsan.controller.common.BaseController;
import com.danhkhang.nongsan.dto.ProductSearchDTO;
import com.danhkhang.nongsan.entity.Category;
import com.danhkhang.nongsan.entity.Product;
import com.danhkhang.nongsan.entity.Promotion;
import com.danhkhang.nongsan.service.CategoryService;
import com.danhkhang.nongsan.service.FileUploadService;
import com.danhkhang.nongsan.service.ProductService;
import com.danhkhang.nongsan.service.PromotionService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@AllArgsConstructor
@Controller
@RequestMapping("/admin/promotions_management")
public class AdminPromotionController extends BaseController {

    private final ProductService productService;
    private final PromotionService promotionService;

    private final FileUploadService fileUploadService;


    @GetMapping
    public String showProductsPage(Model model,
                                   @RequestParam(name = "page", defaultValue = "1") int page,
                                   @RequestParam(name = "size", defaultValue = "4") int size) {
        Page<Promotion> promotionPage = promotionService.getAllPromotions(PageRequest.of(page - 1, size));

        model.addAttribute("promotionPage", promotionPage);
        model.addAttribute("currentPage", page);
        model.addAttribute("totalPages", promotionPage.getTotalPages());

        return "admin/promotions";
    }


    @GetMapping("/add")
    public String showAddProductForm(Model model) {
        model.addAttribute("promotion", new Promotion());
        return "admin/promotions_add_or_update";
    }

    @PostMapping("/add")
    public String addOrUpdateProduct(@ModelAttribute("promotion") @Valid Promotion promotion,
                                     BindingResult bindingResult,
                                     @RequestParam("cover_image") MultipartFile coverImage,
                                     Model model
            , RedirectAttributes redirectAttributes) throws IOException {

        if (bindingResult.hasErrors()) {
            model.addAttribute("error", "Đã có lỗi xảy ra vui lòng nhập lại");
            return "admin/promotions_add_or_update";
        }


        if (promotion.getId() != null) {
            // Check if there is an existing product with the given ID
            Promotion existingPromotion = promotionService.getPromotionById(promotion.getId());
            if (existingPromotion != null) {
                // Update the product with new data
                if (promotion.getStartDate() == null) {
                    promotion.setStartDate(existingPromotion.getStartDate());
                }

                if (promotion.getEndDate() == null) {
                    promotion.setEndDate(existingPromotion.getEndDate());
                }
                if (coverImage.isEmpty()) {
                    promotion.setImage(existingPromotion.getImage());
                }

                promotionService.updatePromotion(promotion, coverImage);

                Promotion editedPromotion = promotionService.getPromotionById(promotion.getId());
                model.addAttribute("promotion", editedPromotion);
                redirectAttributes.addFlashAttribute("message", "Sửa thông tin chương trình khuyến mại thành công!");
            }
        } else {
            Promotion existedPromotion = promotionService.getPromotionByName(promotion.getTitle());

            if (existedPromotion != null) {
                model.addAttribute("error", "Đã tồn tại chương trình khuyến mại với tên này");
                return "admin/promotions_add_or_update";
            } else promotionService.addPromotion(promotion, coverImage);
            redirectAttributes.addFlashAttribute("message", "Thêm chương trình khuyến mại thành công!");
        }

        return "redirect:/admin/promotions_management/add";
    }


    @GetMapping("/edit/{id}")
    public String showEditProductForm(@PathVariable Long id, Model model) {
        Promotion promotion = promotionService.getPromotionById(id);
        model.addAttribute("promotion", promotion);

        return "admin/promotions_add_or_update";
    }


    @GetMapping("/delete/{id}")
    public String deleteProduct(@PathVariable Long id, @RequestParam(defaultValue = "false") boolean activeFlag, RedirectAttributes redirectAttributes) {
        try {
            promotionService.setActiveFlag(id, activeFlag);
            // Add a success message to the model
            String action = activeFlag ? "kích hoạt lại trạng thái đang bán cho" : "cập nhật trạng thái không bán cho";
            redirectAttributes.addFlashAttribute("message", action + " chương trình khuyến mại thành công!");

            return "redirect:/admin/promotions_management";
        } catch (Exception ex) {
            redirectAttributes.addFlashAttribute("message", ex.getMessage());
            return "redirect:/admin/promotions_management";
        }
    }

    @PostMapping("/upload-image")
    @CrossOrigin(origins = "http://localhost:8081")
    @ResponseBody
    public ResponseEntity<?> uploadImage(@RequestParam("upload") MultipartFile upload) throws IOException {
        if (upload.isEmpty()) {
            return new ResponseEntity<>("please select a file!", HttpStatus.BAD_REQUEST);
        }


        String url = fileUploadService.uploadFile(upload);

        Map<String, Object> response = new HashMap<>();
        response.put("url", "/" + url);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
