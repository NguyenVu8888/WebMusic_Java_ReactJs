package com.nguyenvu.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenvu.entities.xNotificationEntity;

public interface NotificationRepository extends JpaRepository<xNotificationEntity, Long>{

	List<xNotificationEntity> findByTitleContaining(String title);
}
