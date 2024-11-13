package com.clofit.api.closet.repository;

import com.clofit.api.closet.entity.Closet;
import com.clofit.api.clothes.entity.Clothes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ClosetRepository extends JpaRepository<Closet, Long> {
//    List<Closet> findAllByMemberId(Long memberId);

    @Query("SELECT DISTINCT c FROM Closet c JOIN FETCH c.clothes JOIN FETCH c.member WHERE c.member.id = :memberId")
    List<Closet> findAllByMemberId(@Param("memberId") Long memberId);
}