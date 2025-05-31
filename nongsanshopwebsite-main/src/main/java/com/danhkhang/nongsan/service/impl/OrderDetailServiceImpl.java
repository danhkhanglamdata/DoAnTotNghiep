package com.danhkhang.nongsan.service.impl;

import com.danhkhang.nongsan.entity.Order;
import com.danhkhang.nongsan.entity.OrderDetail;
import com.danhkhang.nongsan.repository.OrderDetailRepository;
import com.danhkhang.nongsan.service.OrderDetailService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class OrderDetailServiceImpl implements OrderDetailService {

    private OrderDetailRepository orderDetailRepository;

    @Override
    public List<OrderDetail> getAllOrderDetailByOrder(Order order) {
        return orderDetailRepository.findByOrder(order);
    }
}
