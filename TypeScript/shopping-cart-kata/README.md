#Checkout Kata

We have a shopkeeper with a new checkout system. He enters the SKU (Stock Keeping Unit) of each of the items, hits total and the total price is displayed. Goods are priced individually, however there are weekly special offers for when multiple items are bought. For example "A99 are 50 each or 3 for 130".

Weekly offers change frequently.

    SKU            Unit Price            Special Offer
    A99            50                3 for 130
    B15            30                2 for 45
    C40            60
    T34            99

The checkout accepts the items in any order, so that if we scan B15, an A99 and another B15, we'll recognise two B15 and apply the discount of 2 for 45. 

Our new Till hardware has an interface:
    
    public interface IDisplay{
        void update(String s)        
    }
