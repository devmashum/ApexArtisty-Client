Project Details:
ApexArtistry is a fully dynamic and responsive online platform where users can support artists through donations. If a user aspires to be a creative artist, they can submit a request to the admin, who has the authority to elevate a regular user to the status of a creator. Once designated as a creator, individuals can submit their artwork and await the platform's decision on whether they win the contest. Winners receive a prize, while non-winners receive the donated amount after deducting platform charges.

Functionality:
To test the functionality, please log in with the following credentials:

- As a User: user@gmail.com
- As a Creator: creator@gmail.com
- As an Admin: admin@gmail.com
  Password (same for all users): 123456

Dashboard: I have created a dashboard for three types of users.

1. Normal User: A normal user can select an art and donate using the Card Payment method. In the normal user dashboard, users can check their profile, cart, donated contests, and payment history.
2. Creator: A creator can add art by clicking "Add Contest." They can check their submitted contests and verify whether they won a contest or not. If they also donated for an art, they can check their payment history.
3. Admin: An admin can manage all users, including making a normal user a creator. If necessary, the admin can delete a user. They can also declare a creator as a winner. The admin has access to the support section, displaying all contact data.

User Authentication: For user registration, user login/logout system, I have utilized Firebase.
Security: I have secured this website using Json Web Token (JWT).
Payment: The most popular payment method, Stripe, is implemented for the payment process.
DataStore: To store all data, I have used MongoDB.
