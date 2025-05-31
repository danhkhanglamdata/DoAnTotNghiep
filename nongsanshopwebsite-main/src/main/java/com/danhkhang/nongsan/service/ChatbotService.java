package com.danhkhang.nongsan.service;

import com.danhkhang.nongsan.dto.chat.ChatbotResponse;
import com.danhkhang.nongsan.entity.Product;

import java.util.List;

public interface ChatbotService {
    ChatbotResponse processMessage(String message);

    List<Product> searchProductsByKeywords(List<String> keywords);
}
