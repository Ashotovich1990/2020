const candidateNames = 
    [
        "Donald Trump", "Bill Weld", "Bob Corker", "Larry Hogan", "John Kasich",
        "Cory Booker", "Pete Buttigieg", "Julian Castro", "John Delaney", "Tulsi Gabbard", "Kirsten Gillibrand", "Kamala Harris", "John Hickenlooper", "Jay Inslee",
        "Amy Klobuchar", "Bernie Sanders", "Elizabeth Warren", "Marianne Williamson", "Andrew Yang", "Andrew Gillum", "Stacey Abrams", "Joe Biden", "Bill de Blasio", "Beto O'Rourke",
        "Adam Kokesh", "John McAfee", "Vermin Supreme", "Arvin Vohra", "Sedinam Kinamo", "Dario Hunter", "Ian Schlakman"
    ];

    const candidatesReducer = (state= candidateNames, action) => {
        Object.freeze(state);
        switch(action.type) {
          default:
            return state;
        }
      };
      
      export default candidatesReducer;
