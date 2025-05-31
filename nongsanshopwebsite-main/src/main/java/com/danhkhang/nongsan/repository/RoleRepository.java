package com.danhkhang.nongsan.repository;

import com.danhkhang.nongsan.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String name);
}
