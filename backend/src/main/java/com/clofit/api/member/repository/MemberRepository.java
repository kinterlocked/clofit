package com.clofit.api.member.repository;

import com.clofit.api.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findByEmail(String email);

    @Query("SELECT m.personalColor FROM Member m WHERE m.id = :id ")
    String getPersonalColor(Long id);

    @Modifying
    @Transactional
    @Query("UPDATE Member m SET m.personalColor = :color WHERE m.id = :id ")
    void setPersonalColor(Long id, String color);
}
