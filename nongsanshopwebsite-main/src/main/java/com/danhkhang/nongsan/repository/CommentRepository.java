package com.danhkhang.nongsan.repository;

import com.danhkhang.nongsan.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findByBlogIdOrderByCreatedAtDesc(Long blogId);

}
