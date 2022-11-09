DROP TABLE user_detail;
DROP TABLE trade_history;
DROP TABLE portfolio;
DROP TABLE user_account;
DROP TABLE account_type;
DROP TABLE asset_class;

CREATE TABLE user_detail (
    user_id NUMBER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1),
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    email VARCHAR(30),
    password CHAR(256),
    investment_risk NUMBER,
    phone_number CHAR(10),
    PRIMARY KEY (user_id)
);

CREATE TABLE account_type (
    account_type_id NUMBER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1),
    account_type_name VARCHAR(30),
    PRIMARY KEY (account_type_id)
);

CREATE TABLE asset_class (
    asset_class_id NUMBER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1),
    asset_class_name VARCHAR(20),
    PRIMARY KEY (asset_class_id)
);

CREATE TABLE trade_history (
    trade_history_id NUMBER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1),
    fund_name VARCHAR(50),
    quantity NUMBER,
    price NUMBER,
    transaction_date TIMESTAMP DEFAULT systimestamp,
    account_type_id NUMBER,
    user_id NUMBER,
    asset_class_id NUMBER,
    PRIMARY KEY (trade_history_id),
    FOREIGN KEY (account_type_id) REFERENCES account_type(account_type_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES user_detail(user_id) ON DELETE CASCADE,
    FOREIGN KEY (asset_class_id) REFERENCES asset_class(asset_class_id) ON DELETE CASCADE
);

CREATE TABLE portfolio (
    portfolio_id NUMBER GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1), 
    fund_name VARCHAR(20),
    quantity NUMBER,
    avg_cost NUMBER, 
    ltp NUMBER,
    current_value NUMBER,
    net_change NUMBER,
    day_change NUMBER,
    profit_loss NUMBER,
    account_type_id NUMBER,
    user_id NUMBER,
    asset_class_id NUMBER,
    PRIMARY KEY (portfolio_id),
    FOREIGN KEY (account_type_id) REFERENCES account_type(account_type_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES user_detail(user_id) ON DELETE CASCADE,
    FOREIGN KEY (asset_class_id) REFERENCES asset_class(asset_class_id) ON DELETE CASCADE
);

CREATE TABLE user_account (
    account_number VARCHAR(16),
    margin_available NUMBER,
    margin_used NUMBER,
    account_type_id NUMBER,
    user_id NUMBER,
    PRIMARY KEY (account_number),
    FOREIGN KEY (account_type_id) REFERENCES account_type(account_type_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES user_detail(user_id) ON DELETE CASCADE
);

commit;