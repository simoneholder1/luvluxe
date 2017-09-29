
/ADD To Cart
Does the user have an existing cart, based on a previous visit?
Check the username against the database with an sql command. Select * from Orders where userid matches currently logged in user.
If you get a result back then there is a cart.
If not then you would determine it is a new user.

Yes: Determine what was currently left in the cart that has not been paid for. Check if the item you are adding is a duplicate in anything remaining in the cart. If yes,

Assume that once this endpoint is hit, we will have access to the user id, product id, and 
select all from line items where product id === to whatever product id we are passing in and the cart id is equal to whatever the cart id

UPDATE quantity if a new item is added in sql. 

if no duplicate: create another SQL statement allowing the user to insert into the cart 


No:
Create a Cart by using sql to insert into orders.
add a line item by using sql 
get total and send


Create another SQL statement


