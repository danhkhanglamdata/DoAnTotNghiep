package com.danhkhang.nongsan.dto.chat;

import com.danhkhang.nongsan.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChatbotResponse {
    private String message;
    private List<Product> recommendedProducts;
}
