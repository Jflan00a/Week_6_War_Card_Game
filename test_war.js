let expect = chai.expect;

describe('MyFunctions', function() {
    
    
    describe('#makeDeck', function() {
        it("Make sure that buildDeck makes a deck of 52 cards", function(){
            testDeck = new Deck();
            expect (testDeck).to.be.an('object');
        });
    });
    

    describe('#showScore', function() {
        it ("Should be a number between 0 and 26", function() {
            testPlayer = new Player();
            let x = testPlayer.showScore();
            expect(x).to.be.within(0,26);
        })
    })
})

