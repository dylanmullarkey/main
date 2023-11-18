# CSS Notes

### When increasing height of input element, use line-height.

```
input{
    line-height: 10px;
    <!-- Instead of
    height: 10px; -->
}
```

# Centering with Margins

### Must have a width set

```
display: block;
margin-left: auto;
margin-right: auto
```

# Padding/Border/Margin -- The Box Model

### Padding lives on inside of our element

### Border lives between padding/margin

### Margin lives outside element

# Importing Fonts

### Download font and upload ttf file to project
```
@font-face{
    src: url(".ttf")
    font-family: <name of font>;
}
```

# Flexbox

```
display: flex;
justify-content: (start, center, end, space-around, space-evenly, space-between);
align-items: (start, center, end);
flex-direction: (row, column);
```
### Justify-content organizes on the (main) axis
### Align-items organizes on the (cross) axis.
### MAIN AXIS IS WHAT IS SET ON FLEX-DIRECTION
#### Align-items defaults to stretch. Set height to fix or give value.

