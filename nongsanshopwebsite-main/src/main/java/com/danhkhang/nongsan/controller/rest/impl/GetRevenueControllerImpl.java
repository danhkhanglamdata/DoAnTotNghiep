package com.danhkhang.nongsan.controller.rest.impl;

import com.danhkhang.nongsan.controller.rest.IGetRevenueController;
import com.danhkhang.nongsan.controller.rest.base.RestApiV1;
import com.danhkhang.nongsan.controller.rest.base.VsResponseUtil;
import com.danhkhang.nongsan.service.ProductService;
import com.danhkhang.nongsan.service.CategoryService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;

@RestApiV1
@AllArgsConstructor
public class GetRevenueControllerImpl implements IGetRevenueController {

    private ProductService productService;
    private CategoryService categoryService;

    @Override
    public ResponseEntity<?> getProductRevenueByMonth(@PathVariable("selectedMonth") int selectedMonth) throws UnsupportedEncodingException {
        return VsResponseUtil.ok(HttpStatus.OK, productService.getTop10BestSellerByMonth(selectedMonth));
    }

    @Override
    public ResponseEntity<?> getMonthRevenueByYear(@PathVariable("selectedYear") int selectedYear) throws UnsupportedEncodingException {
        return VsResponseUtil.ok(HttpStatus.OK, productService.getMonthRevenuePerYear(selectedYear));
    }

}
