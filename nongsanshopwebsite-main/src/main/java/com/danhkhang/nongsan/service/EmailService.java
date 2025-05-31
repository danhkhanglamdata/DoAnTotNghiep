package com.danhkhang.nongsan.service;

public interface EmailService {
    void sendSimpleEmail(String to, String subject, String text);
}
