package com.danhkhang.nongsan.service;

import com.danhkhang.nongsan.dto.CartItemDTO;
import com.danhkhang.nongsan.dto.CartDTO;
import jakarta.servlet.http.HttpSession;

public interface CartService {
    void addToCart(HttpSession session, CartItemDTO cartItem);

    void updateCartItemQuantity(HttpSession session, Long productId, int quantity);

    void removeCartItem(HttpSession session, Long productId);

    void clearCart(HttpSession session);

    CartDTO getCart(HttpSession session);
}

