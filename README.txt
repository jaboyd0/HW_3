Random password generator that takes into account parameters set by user.

Will give error message if password length is not at least 8 or is greater than 128.
Also if no options were selected

I included a console.log that will log the character pool used for every password generated.(mostly so that you can check and make sure the all selected character sets are included in randomization each time)

The methodology I went with was:
based on answers to the questions I created an array for that character group, or created an empty arry if they answered no.

I combined all the arrays into a large array varriable that I named "characterPool"

I run a for loop(set to run however many times the user selected for password length) that pulls a random character from the character pool and adds it on to the characters already selected.

This creates a truely random password that will be within the parameters the user set.