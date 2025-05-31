package com.danhkhang.nongsan.controller;

import com.danhkhang.nongsan.controller.common.BaseController;
import com.danhkhang.nongsan.entity.User;
import com.danhkhang.nongsan.service.ProductService;
import com.danhkhang.nongsan.entity.Product;
import com.danhkhang.nongsan.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@Controller
@AllArgsConstructor
@RequestMapping("/wishlist")
public class WishListController extends BaseController {

    private final UserService userService;
    private final ProductService productService;

    @PostMapping("/add")
    @ResponseBody
    public ResponseEntity<String> addToWishList(@RequestParam Long productId) {
        User currentUser = getCurrentUser();
        Product product = productService.getProductById(productId);

        if (product != null) {
            userService.addProductToUser(currentUser.getId(), productId);
            return ResponseEntity.ok("ok");
        }

        return ResponseEntity.badRequest().body("Product not found");
    }

    @PostMapping("/remove")
    @ResponseBody
    public ResponseEntity<String> removeFromWishList(@RequestParam Long productId) {
        User currentUser = getCurrentUser();
        Product product = productService.getProductById(productId);

        if (product != null) {
            userService.removeProductFromUser(currentUser.getId(), productId);
            return ResponseEntity.ok("ok");
        }

        return ResponseEntity.badRequest().body("Product not found");
    }

    @GetMapping
    public String getWishList(Model model) {
        Set<Product> favoritesList = productService.getFavoriteProductsByUserId(getCurrentUser().getId());
        model.addAttribute("favoritesList", favoritesList);
        return "user/wishlist";
    }


}
