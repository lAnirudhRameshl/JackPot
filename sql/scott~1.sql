desc asset_class;
    
insert into asset_class(asset_class_name) values ('Main Index');
insert into asset_class(asset_class_name) values ('Small Cap Company');
insert into asset_class(asset_class_name) values ('Bonds');
select * from asset_class;

desc account_type;
    
insert into account_type(account_type_name) values ('Brokerage');
insert into account_type(account_type_name) values ('IRA');
insert into account_type(account_type_name) values ('HSA');
select * from account_type;

desc portfolio;
select * from user_detail;
insert into user_detail (first_name,last_name,email,password,investment_risk,phone_number) values ('Kiran','B','k@gmail.com','1234',4,'123456');
insert into portfolio(fund_name,quantity,avg_cost,ltp,current_value,net_change,day_change,profit_loss,account_type_id,user_id,asset_class_id) values ('TESLA',12,3000,3900,40,50,23,2,1,61,3);
select * from portfolio_detail;
select * from user_account;

delete from portfolio_detail where id= 
