package com.danhkhang.nongsan.service;

import com.danhkhang.nongsan.entity.Role;

import java.util.List;

public interface RoleService {
    Role createRole(Role role);

    Role getRoleById(Long roleId);

    List<Role> getAllRoles();

    void deleteRole(Long roleId);
}
