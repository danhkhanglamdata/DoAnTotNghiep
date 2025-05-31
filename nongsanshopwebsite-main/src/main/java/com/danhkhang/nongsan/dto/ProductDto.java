package com.danhkhang.nongsan.dto;

import com.danhkhang.nongsan.entity.Product;
import lombok.Data;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link Product}
 */
@Data
@Value
public class ProductDto implements Serializable {
    String title;
    Double totalRevenue;

}