package com.danhkhang.nongsan.service;

import com.danhkhang.nongsan.entity.Order;
import com.danhkhang.nongsan.entity.OrderDetail;

import java.util.List;

public interface OrderDetailService {
    List<OrderDetail> getAllOrderDetailByOrder(Order order);
}
