# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|message_number|integer|null: false, foreign_key: true|

### Sssociateion
- belongs_to :group_user
- has_many :messages

## group_usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|group_name|string|null: false, foreign_key: true|
|members_id|integer|null: false, foreign_key: true|

### Sssociateion
- has_many :users
- has_many :groups

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|
|password|text|null: false, unique: true|
|belong_id|integer||

### Sssociateion
- belongs_to :group_user


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|message|text|null: false|
|image|img||
|created_at|integer|null: false|
|group_id|integer|null: false, foreign_key: true|

### Sssociateion
- belongs_to :group



