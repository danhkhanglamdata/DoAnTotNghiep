package com.danhkhang.nongsan.service;

import com.danhkhang.nongsan.dto.CategoryDto;
import com.danhkhang.nongsan.entity.Category;
import com.danhkhang.nongsan.entity.Promotion;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface PromotionService {

    Page<Promotion> getAllPromotions(Pageable pageable);

    List<Promotion> getActivePromotionList();

    Promotion getPromotionById(Long categoryId);

    Promotion getPromotionByName(String promotionName);

    void addPromotion(Promotion promotion , MultipartFile image) throws IOException;

    void updatePromotion(Promotion updatedPromotion, MultipartFile image) throws IOException;

    void deletePromotion(Long promotionId);

    void setActiveFlag(Long promotionId, boolean activeFlag);


}
