package com.clofit.api.gpu.service;

import org.springframework.web.multipart.MultipartFile;

public interface GPUService {
    String upload(String path, MultipartFile image);
}
