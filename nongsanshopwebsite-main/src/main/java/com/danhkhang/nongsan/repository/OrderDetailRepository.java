package com.danhkhang.nongsan.repository;

import com.danhkhang.nongsan.entity.Order;
import com.danhkhang.nongsan.entity.OrderDetail;
import com.danhkhang.nongsan.entity.composite_key.OrderDetailId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, OrderDetailId> {
    List<OrderDetail> findByOrder(Order order);

    @Query("SELECT od.quantity FROM OrderDetail od WHERE od.order.id = :orderId AND od.product.id = :productId")
    int findByProductAndOrOrder(Long orderId, Long productId);

    List<OrderDetail> findByProductId(long productId);
}
