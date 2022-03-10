package com.example.backend.bean;

import lombok.Data;

import java.text.DecimalFormat;
import java.util.Date;

@Data
public class ProductVO {

	int p_seq;
	String p_id;
	String p_name;
	String p_cat;
	int p_stock_cnt;
	String p_desc;
	Date p_date;
	int p_reco_cnt;
	int p_price;
	DecimalFormat p_discount_ratio;
	String admin_id;
}
