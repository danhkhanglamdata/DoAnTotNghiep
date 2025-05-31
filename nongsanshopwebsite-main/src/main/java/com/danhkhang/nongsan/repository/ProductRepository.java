package com.danhkhang.nongsan.repository;

import com.danhkhang.nongsan.entity.Product;
import com.danhkhang.nongsan.entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    Page<Product> findByTitleContainingAndActiveFlag(String keyword, boolean activeFlag, Pageable pageable);

    Product findByTitleAndActiveFlag(String title, boolean activeFlag);

    Page<Product> findByCategoryAndActiveFlag(Category category, boolean activeFlag, Pageable pageable);

    Page<Product> findByCategoryIdAndOriginalPriceBetweenAndActiveFlag(Long categoryId, double minPrice, double maxPrice, boolean activeFlag, Pageable pageable);

    Page<Product> findByCategory_IdAndTitleContainingAndOriginalPriceBetweenAndActiveFlag(Long categoryId, String keyword, double minPrice, double maxPrice, boolean activeFlag, Pageable pageable);

    Page<Product> findByCategoryIdAndTitleContainingAndOriginalPriceBetweenAndActiveFlagOrderBySalePriceDesc(Long categoryId, String keyword, double minPrice, double maxPrice, boolean activeFlag, Pageable pageable);

    Page<Product> findByCategoryIdAndTitleContainingAndOriginalPriceBetweenAndActiveFlagOrderBySalePriceAsc(Long categoryId, String keyword, double minPrice, double maxPrice, boolean activeFlag, Pageable pageable);

    Page<Product> findByCategoryIdAndTitleContainingAndOriginalPriceBetweenAndActiveFlagOrderByCreatedAtAsc(Long categoryId, String keyword, double minPrice, double maxPrice, boolean activeFlag, Pageable pageable);

    Page<Product> findByCategoryIdAndTitleContainingAndOriginalPriceBetweenAndActiveFlagOrderByCreatedAtDesc(Long categoryId, String keyword, double minPrice, double maxPrice, boolean activeFlag, Pageable pageable);

    Page<Product> findByTitleContainingAndOriginalPriceBetweenAndActiveFlagOrderByCreatedAtAsc(String title, double minPrice, double maxPrice, boolean activeFlag, Pageable pageable);

    Page<Product> findByTitleContainingAndOriginalPriceBetweenAndActiveFlagOrderByCreatedAtDesc(String title, double minPrice, double maxPrice, boolean activeFlag, Pageable pageable);

    Page<Product> findByTitleContainingAndOriginalPriceBetweenAndActiveFlagOrderBySalePriceAsc(String title, double minPrice, double maxPrice, boolean activeFlag, Pageable pageable);

    Page<Product> findByTitleContainingAndOriginalPriceBetweenAndActiveFlagOrderBySalePriceDesc(String title, double minPrice, double maxPrice, boolean activeFlag, Pageable pageable);

    List<Product> findTop4ByActiveFlagOrderByBuyCountDesc(boolean activeFlag);

    List<Product> findByActiveFlagOrderByCreatedAtDesc(boolean activeFlag);

    List<Product> findTop10ByActiveFlagOrderByTotalRevenueDesc(boolean activeFlag);

    List<Product> findAllByActiveFlag(boolean activeFlag);

    List<Product> findAllByCategoryAndActiveFlag(Category category, boolean activeFlag);

    Page<Product> findByCategoryIdAndActiveFlag(Long categoryId, boolean activeFlag, Pageable pageable);

    Page<Product> findByCategory_IdAndTitleContainingAndActiveFlag(Long categoryId, String keyword, boolean activeFlag, Pageable pageable);

    @Query(value = "SELECT b.title, SUM(od.price * od.quantity) AS total_revenue FROM products b " +
            "JOIN order_details od ON b.id = od.product_id " +
            "JOIN orders o ON od.order_id = o.id " +
            "WHERE MONTH(o.create_date) = :month " +
            "GROUP BY b.title " +
            "ORDER BY total_revenue " +
            "DESC " +
            "LIMIT 10", nativeQuery = true)
    List<Object[]> findTop10BestSellerByMonth(@Param("month") int month);

    @Query("SELECT MONTH(od.createdAt) AS month, SUM(od.totalPrice) AS totalRevenue " +
            "FROM Order od " +
            "WHERE YEAR(od.createdAt) = :year " +
            "GROUP BY MONTH(od.createdAt) " +
            "ORDER BY MONTH(od.createdAt)")
    List<Object[]> findMonthlyRevenue(@Param("year") int year);

    List<Product> findTop4ByCategoryIdAndActiveFlag(Long id, boolean b);

    List<Product> findByPromotionId(Long promotionId);
}