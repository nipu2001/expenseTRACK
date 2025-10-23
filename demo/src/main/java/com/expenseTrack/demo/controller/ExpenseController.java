package com.expenseTrack.demo.controller;



import com.expenseTrack.demo.model.Expense;
import com.expenseTrack.demo.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = "*") // Allow Expo frontend to access API
public class ExpenseController {

    @Autowired
    private ExpenseRepository expenseRepository;

    @GetMapping
    public List<Expense> getAll() {
        return expenseRepository.findAll();
    }

    @PostMapping
    public Expense create(@RequestBody Expense expense) {
        return expenseRepository.save(expense);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        expenseRepository.deleteById(id);
    }

    @GetMapping("/filter")
    public List<Expense> filterByDate(@RequestParam("from") LocalDate from,
                                      @RequestParam("to") LocalDate to) {
        return expenseRepository.findByDateBetween(from, to);
    }
}
