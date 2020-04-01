str = "[1] Praise the LORD!\n    Praise the LORD, O my soul!\n    [2] I will praise the LORD as long as I live;\n        I will sing praises to my God while I have my being.\n    \n    \n    [3] Put not your trust in princes,\n        in a son of man, in whom there is no salvation.\n    [4] When his breath departs, he returns to the earth;\n        on that very day his plans perish.\n    \n    \n    [5] Blessed is he whose help is the God of Jacob,\n        whose hope is in the LORD his God,\n    [6] who made heaven and earth,\n        the sea, and all that is in them,\n    who keeps faith forever;\n    [7]     who executes justice for the oppressed,\n        who gives food to the hungry.\n    \n    \n    The LORD sets the prisoners free;\n    [8]     the LORD opens the eyes of the blind.\n    The LORD lifts up those who are bowed down;\n        the LORD loves the righteous.\n    [9] The LORD watches over the sojourners;\n        he upholds the widow and the fatherless,\n        but the way of the wicked he brings to ruin.\n    \n    \n    [10] The LORD will reign forever,\n        your God, O Zion, to all generations.\n    Praise the LORD!"

def splitByVerse(str):
    pairs = []

    i = 0
    scanningNumber = False
    scanningText = False

    substringNumber = ""
    substringText = ""
    while i < len(str):
        c = str[i]

        if c == '[':
            # End of the previous fragment
            if substringText != "":
                pairs.append({'verse': substringNumber.strip(), 'text': substringText.strip().split('\n')})
            # ... and start of a new string.
            substringNumber = ""
            substringText = ""
            scanningNumber = True
            scanningText = False
        elif c == ']':
            scanningNumber = False
            scanningText = True
        else:
            if scanningNumber:
                substringNumber += c
            if scanningText:
                substringText += c
        i = i + 1


    if substringText != "":
        pairs.append({'verse': substringNumber.strip(), 'lines': substringText.strip().split('\n')})

    return pairs

print(splitByVerse(str))
