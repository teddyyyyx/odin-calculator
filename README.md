# odin-calculator

NOTES:

    - Grid layout is used to arrange the buttons
    - eval() is strongly discourage by The Odin Project due to code injection -- a security threat
    - data- attribute is used as identifiers for the HTML elements, specially for the buttons to be linked with js functions
    - for the '+/- button' function,
        The function checks if minus '-' sign is included in the front of the current display textContent
        (currentOperand.textContent.slice(0,1) === '-') >>>>>> slice method (0,1)
                                                                checks the index zero (0) and gets the first (1) number of the display textContent
                                                                if the index 0 is equal to '-', then we remove it using:
                                                                currentOperand.textContent = currentOperand.textContent.substring(1);
        If the index 0 is not equal to '-', the we add a minus '-' sign when the '+/- button' is clicked.

