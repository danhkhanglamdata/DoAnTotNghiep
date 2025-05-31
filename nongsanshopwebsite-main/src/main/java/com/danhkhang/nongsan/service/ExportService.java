package com.danhkhang.nongsan.service;

import com.danhkhang.nongsan.dto.ProductDto;
import com.danhkhang.nongsan.entity.User;
import com.danhkhang.nongsan.dto.CategoryDto;
import com.danhkhang.nongsan.dto.OrderDTO;

import java.util.List;

public interface ExportService {

    String exportOrderReport(User user, List<OrderDTO> orderDTOList, String keyword);

    String exportCategoryReport(User user, List<CategoryDto> categoryDTOList, String keyword);

    String exportProductReport(User user, List<ProductDto> productDtoList, String keyword);

}
