-- Database Queries

-- todo Find all customers with postal code 1010
select * from Customers
where postalcode = 1010
-- todo Find the phone number for the supplier with the id 11
SELECT * FROM [Suppliers]
where supplierid = 11
-- todo List first 10 orders placed, sorted descending by the order date
-- SELECT * from (
--     select * from orders order by orderid asc limit 10
-- )
-- order by orderDate desc;

select * 
from orders 
order by orderDate desc
-- (// sorting) 
limit 10 
-- (// this gives the first 10)

-- todo Find all customers that live in London, Madrid, or Brazil
SELECT * FROM customers where city = "London" or city = "Madrid" or city =  "Brazil"
-- todo Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
insert into customers (CustomerName, ContactName, Address, City, PostalCode, Country) values ('The Shire', 'Bilbo Baggins', '1 Hobbit Hole', 'Bag End', '111', 'Middle Earth')
-- todo Update Bilbo Baggins record so that the postal code changes to "11122"

update customers set postalcode = '11122' where customerid = 92;

-- todo (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted
select count(distinct city) from customers
-- todo (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name

SELECT * FROM [Suppliers]
where length(suppliername) > 20


