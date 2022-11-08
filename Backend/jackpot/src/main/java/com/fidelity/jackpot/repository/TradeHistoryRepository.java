package com.fidelity.jackpot.repository;

import com.fidelity.jackpot.model.TradeHistory;
import com.fidelity.jackpot.payload.TradeHistoryDto;
import org.springframework.data.jpa.repository.JpaRepository;
<<<<<<< HEAD
import org.springframework.data.jpa.repository.Query;
=======
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
>>>>>>> c79a12f869452abe29902d4fea58524ad8122d1e
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface TradeHistoryRepository extends JpaRepository<TradeHistory,Long> {
<<<<<<< HEAD
    //List<TradeHistory> findByUserUserId(Long userId);
    //List<TradeHistory> findByFundName(String fundName);

=======
    @Query(
            value = "SELECT * \n" +
                    "     FROM trade_history t JOIN user_detail u\n" +
                    "     ON t.user_id = u.user_id \n" +
                    "     AND u.user_id=?1",
            nativeQuery = true)
    List<TradeHistory> findByUserUserId(Long userId);

    @Transactional
    @Modifying
    @Query(
            value = "INSERT INTO trade_history VALUES(DEFAULT, :#{#tradeHistoryDto.fundName},:#{#tradeHistoryDto.quantity}, :#{#tradeHistoryDto.price}, :#{#tradeHistoryDto.transactionDate}, :#{#tradeHistoryDto.accountTypeId}, :#{#tradeHistoryDto.userId}, :#{#tradeHistoryDto.assetClassId})",
            nativeQuery = true
    )
    Integer insertTradeHistoryByUserId(@Param("tradeHistoryDto")TradeHistoryDto tradeHistoryDto);
>>>>>>> c79a12f869452abe29902d4fea58524ad8122d1e
}
