package com.danhkhang.nongsan.controller.admin;

import com.danhkhang.nongsan.controller.common.BaseController;
import com.danhkhang.nongsan.service.RoleService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@AllArgsConstructor
@Controller
@RequestMapping("/admin/roles_management")
public class AdminRoleController extends BaseController {
    private final RoleService roleService;
}

