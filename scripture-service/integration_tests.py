#!/usr/local/bin/python3
# -*- coding: utf-8 -*-

import logging
import unittest
from lambda_function import lambda_handler

class TestDailyOffice(unittest.TestCase):

    def test_morning(self):
        morning_lessons = ["[1] Then the LORD said to Moses, “Go in to Pharaoh and say to him, ‘Thus says the LORD, “Let my people go, that they may serve me. [2] But if you refuse to let them go, behold, I will plague all your country with frogs. [3] The Nile shall swarm with frogs that shall come up into your house and into your bedroom and on your bed and into the houses of your servants and your people, and into your ovens and your kneading bowls. [4] The frogs shall come up on you and on your people and on all your servants.”’” [5] And the LORD said to Moses, “Say to Aaron, ‘Stretch out your hand with your staff over the rivers, over the canals and over the pools, and make frogs come up on the land of Egypt!’” [6] So Aaron stretched out his hand over the waters of Egypt, and the frogs came up and covered the land of Egypt. [7] But the magicians did the same by their secret arts and made frogs come up on the land of Egypt.\n\n  [8] Then Pharaoh called Moses and Aaron and said, “Plead with the LORD to take away the frogs from me and from my people, and I will let the people go to sacrifice to the LORD.” [9] Moses said to Pharaoh, “Be pleased to command me when I am to plead for you and for your servants and for your people, that the frogs be cut off from you and your houses and be left only in the Nile.” [10] And he said, “Tomorrow.” Moses said, “Be it as you say, so that you may know that there is no one like the LORD our God. [11] The frogs shall go away from you and your houses and your servants and your people. They shall be left only in the Nile.” [12] So Moses and Aaron went out from Pharaoh, and Moses cried to the LORD about the frogs, as he had agreed with Pharaoh. [13] And the LORD did according to the word of Moses. The frogs died out in the houses, the courtyards, and the fields. [14] And they gathered them together in heaps, and the land stank. [15] But when Pharaoh saw that there was a respite, he hardened his heart and would not listen to them, as the LORD had said.\n\n  [16] Then the LORD said to Moses, “Say to Aaron, ‘Stretch out your staff and strike the dust of the earth, so that it may become gnats in all the land of Egypt.’” [17] And they did so. Aaron stretched out his hand with his staff and struck the dust of the earth, and there were gnats on man and beast. All the dust of the earth became gnats in all the land of Egypt. [18] The magicians tried by their secret arts to produce gnats, but they could not. So there were gnats on man and beast. [19] Then the magicians said to Pharaoh, “This is the finger of God.” But Pharaoh's heart was hardened, and he would not listen to them, as the LORD had said.\n\n  [20] Then the LORD said to Moses, “Rise up early in the morning and present yourself to Pharaoh, as he goes out to the water, and say to him, ‘Thus says the LORD, “Let my people go, that they may serve me. [21] Or else, if you will not let my people go, behold, I will send swarms of flies on you and your servants and your people, and into your houses. And the houses of the Egyptians shall be filled with swarms of flies, and also the ground on which they stand. [22] But on that day I will set apart the land of Goshen, where my people dwell, so that no swarms of flies shall be there, that you may know that I am the LORD in the midst of the earth. [23] Thus I will put a division between my people and your people. Tomorrow this sign shall happen.”’” [24] And the LORD did so. There came great swarms of flies into the house of Pharaoh and into his servants' houses. Throughout all the land of Egypt the land was ruined by the swarms of flies.\n\n  [25] Then Pharaoh called Moses and Aaron and said, “Go, sacrifice to your God within the land.” [26] But Moses said, “It would not be right to do so, for the offerings we shall sacrifice to the LORD our God are an abomination to the Egyptians. If we sacrifice offerings abominable to the Egyptians before their eyes, will they not stone us? [27] We must go three days' journey into the wilderness and sacrifice to the LORD our God as he tells us.” [28] So Pharaoh said, “I will let you go to sacrifice to the LORD your God in the wilderness; only you must not go very far away. Plead for me.” [29] Then Moses said, “Behold, I am going out from you and I will plead with the LORD that the swarms of flies may depart from Pharaoh, from his servants, and from his people, tomorrow. Only let not Pharaoh cheat again by not letting the people go to sacrifice to the LORD.” [30] So Moses went out from Pharaoh and prayed to the LORD. [31] And the LORD did as Moses asked, and removed the swarms of flies from Pharaoh, from his servants, and from his people; not one remained. [32] But Pharaoh hardened his heart this time also, and did not let the people go.", "[1] That same day Jesus went out of the house and sat beside the sea. [2] And great crowds gathered about him, so that he got into a boat and sat down. And the whole crowd stood on the beach. [3] And he told them many things in parables, saying: “A sower went out to sow. [4] And as he sowed, some seeds fell along the path, and the birds came and devoured them. [5] Other seeds fell on rocky ground, where they did not have much soil, and immediately they sprang up, since they had no depth of soil, [6] but when the sun rose they were scorched. And since they had no root, they withered away. [7] Other seeds fell among thorns, and the thorns grew up and choked them. [8] Other seeds fell on good soil and produced grain, some a hundredfold, some sixty, some thirty. [9] He who has ears, let him hear.”\n\n  [10] Then the disciples came and said to him, “Why do you speak to them in parables?” [11] And he answered them, “To you it has been given to know the secrets of the kingdom of heaven, but to them it has not been given. [12] For to the one who has, more will be given, and he will have an abundance, but from the one who has not, even what he has will be taken away. [13] This is why I speak to them in parables, because seeing they do not see, and hearing they do not hear, nor do they understand. [14] Indeed, in their case the prophecy of Isaiah is fulfilled that says:\n\n    “‘“You will indeed hear but never understand,\n        and you will indeed see but never perceive.”\n    [15] For this people's heart has grown dull,\n        and with their ears they can barely hear,\n        and their eyes they have closed,\n    lest they should see with their eyes\n        and hear with their ears\n    and understand with their heart\n        and turn, and I would heal them.’\n    \n    \n      [16] But blessed are your eyes, for they see, and your ears, for they hear. [17] For truly, I say to you, many prophets and righteous people longed to see what you see, and did not see it, and to hear what you hear, and did not hear it.\n\n  [18] “Hear then the parable of the sower: [19] When anyone hears the word of the kingdom and does not understand it, the evil one comes and snatches away what has been sown in his heart. This is what was sown along the path. [20] As for what was sown on rocky ground, this is the one who hears the word and immediately receives it with joy, [21] yet he has no root in himself, but endures for a while, and when tribulation or persecution arises on account of the word, immediately he falls away. [22] As for what was sown among thorns, this is the one who hears the word, but the cares of the world and the deceitfulness of riches choke the word, and it proves unfruitful. [23] As for what was sown on good soil, this is the one who hears the word and understands it. He indeed bears fruit and yields, in one case a hundredfold, in another sixty, and in another thirty.”"]
        morning_psalms = [{
            'psalm_section': '146',
            'psalm_text': '[1] Praise the LORD!\n    Praise the LORD, O my soul!\n    [2] I will praise the LORD as long as I live;\n        I will sing praises to my God while I have my being.\n    \n    \n    [3] Put not your trust in princes,\n        in a son of man, in whom there is no salvation.\n    [4] When his breath departs, he returns to the earth;\n        on that very day his plans perish.\n    \n    \n    [5] Blessed is he whose help is the God of Jacob,\n        whose hope is in the LORD his God,\n    [6] who made heaven and earth,\n        the sea, and all that is in them,\n    who keeps faith forever;\n    [7]     who executes justice for the oppressed,\n        who gives food to the hungry.\n    \n    \n    The LORD sets the prisoners free;\n    [8]     the LORD opens the eyes of the blind.\n    The LORD lifts up those who are bowed down;\n        the LORD loves the righteous.\n    [9] The LORD watches over the sojourners;\n        he upholds the widow and the fatherless,\n        but the way of the wicked he brings to ruin.\n    \n    \n    [10] The LORD will reign forever,\n        your God, O Zion, to all generations.\n    Praise the LORD!',
            'psalm_verses': [{'verse': '1', 'text': ['Praise the LORD!', '    Praise the LORD, O my soul!']}, {'verse': '2', 'text': ['I will praise the LORD as long as I live;', '        I will sing praises to my God while I have my being.']}, {'verse': '3', 'text': ['Put not your trust in princes,', '        in a son of man, in whom there is no salvation.']}, {'verse': '4', 'text': ['When his breath departs, he returns to the earth;', '        on that very day his plans perish.']}, {'verse': '5', 'text': ['Blessed is he whose help is the God of Jacob,', '        whose hope is in the LORD his God,']}, {'verse': '6', 'text': ['who made heaven and earth,', '        the sea, and all that is in them,', '    who keeps faith forever;']}, {'verse': '7', 'text': ['who executes justice for the oppressed,', '        who gives food to the hungry.', '    ', '    ', '    The LORD sets the prisoners free;']}, {'verse': '8', 'text': ['the LORD opens the eyes of the blind.', '    The LORD lifts up those who are bowed down;', '        the LORD loves the righteous.']}, {'verse': '9', 'text': ['The LORD watches over the sojourners;', '        he upholds the widow and the fatherless,', '        but the way of the wicked he brings to ruin.']}, {'verse': '10', 'text': ['The LORD will reign forever,', '        your God, O Zion, to all generations.', '    Praise the LORD!']}]
            }]

        target = {'statusCode': 200, 'body': {'morning': morning_lessons, 'morning-psalms': morning_psalms}}
        output = lambda_handler({'date': '2019-03-01', 'office': 'morning'}, None)
        self.assertEqual(output, target)

    def test_evening(self):
        evening_lessons = ["[1] My son, do not forget my teaching,\n        but let your heart keep my commandments,\n    [2] for length of days and years of life\n        and peace they will add to you.\n    \n    \n    [3] Let not steadfast love and faithfulness forsake you;\n        bind them around your neck;\n        write them on the tablet of your heart.\n    [4] So you will find favor and good success\n        in the sight of God and man.\n    \n    \n    [5] Trust in the LORD with all your heart,\n        and do not lean on your own understanding.\n    [6] In all your ways acknowledge him,\n        and he will make straight your paths.\n    [7] Be not wise in your own eyes;\n        fear the LORD, and turn away from evil.\n    [8] It will be healing to your flesh\n        and refreshment to your bones.\n    \n    \n    [9] Honor the LORD with your wealth\n        and with the firstfruits of all your produce;\n    [10] then your barns will be filled with plenty,\n        and your vats will be bursting with wine.\n    \n    \n    [11] My son, do not despise the LORD's discipline\n        or be weary of his reproof,\n    [12] for the LORD reproves him whom he loves,\n        as a father the son in whom he delights.\n    \n    \n        [13] Blessed is the one who finds wisdom,\n        and the one who gets understanding,\n    [14] for the gain from her is better than gain from silver\n        and her profit better than gold.\n    [15] She is more precious than jewels,\n        and nothing you desire can compare with her.\n    [16] Long life is in her right hand;\n        in her left hand are riches and honor.\n    [17] Her ways are ways of pleasantness,\n        and all her paths are peace.\n    [18] She is a tree of life to those who lay hold of her;\n        those who hold her fast are called blessed.\n    \n    \n    [19] The LORD by wisdom founded the earth;\n        by understanding he established the heavens;\n    [20] by his knowledge the deeps broke open,\n        and the clouds drop down the dew.\n    \n    \n    [21] My son, do not lose sight of these—\n        keep sound wisdom and discretion,\n    [22] and they will be life for your soul\n        and adornment for your neck.\n    [23] Then you will walk on your way securely,\n        and your foot will not stumble.\n    [24] If you lie down, you will not be afraid;\n        when you lie down, your sleep will be sweet.\n    [25] Do not be afraid of sudden terror\n        or of the ruin of the wicked, when it comes,\n    [26] for the LORD will be your confidence\n        and will keep your foot from being caught.\n    [27] Do not withhold good from those to whom it is due,\n        when it is in your power to do it.\n    \n    \n    [28] Do not say to your neighbor, “Go, and come again,\n        tomorrow I will give it”—when you have it with you.\n    [29] Do not plan evil against your neighbor,\n        who dwells trustingly beside you.\n    [30] Do not contend with a man for no reason,\n        when he has done you no harm.\n    [31] Do not envy a man of violence\n        and do not choose any of his ways,\n    [32] for the devious person is an abomination to the LORD,\n        but the upright are in his confidence.\n    [33] The LORD's curse is on the house of the wicked,\n        but he blesses the dwelling of the righteous.\n    [34] Toward the scorners he is scornful,\n        but to the humble he gives favor.\n    [35] The wise will inherit honor,\n        but fools get disgrace.", '[1] I commend to you our sister Phoebe, a servant of the church at Cenchreae, [2] that you may welcome her in the Lord in a way worthy of the saints, and help her in whatever she may need from you, for she has been a patron of many and of myself as well.\n\n  [3] Greet Prisca and Aquila, my fellow workers in Christ Jesus, [4] who risked their necks for my life, to whom not only I give thanks but all the churches of the Gentiles give thanks as well. [5] Greet also the church in their house. Greet my beloved Epaenetus, who was the first convert to Christ in Asia. [6] Greet Mary, who has worked hard for you. [7] Greet Andronicus and Junia, my kinsmen and my fellow prisoners. They are well known to the apostles, and they were in Christ before me. [8] Greet Ampliatus, my beloved in the Lord. [9] Greet Urbanus, our fellow worker in Christ, and my beloved Stachys. [10] Greet Apelles, who is approved in Christ. Greet those who belong to the family of Aristobulus. [11] Greet my kinsman Herodion. Greet those in the Lord who belong to the family of Narcissus. [12] Greet those workers in the Lord, Tryphaena and Tryphosa. Greet the beloved Persis, who has worked hard in the Lord. [13] Greet Rufus, chosen in the Lord; also his mother, who has been a mother to me as well. [14] Greet Asyncritus, Phlegon, Hermes, Patrobas, Hermas, and the brothers who are with them. [15] Greet Philologus, Julia, Nereus and his sister, and Olympas, and all the saints who are with them. [16] Greet one another with a holy kiss. All the churches of Christ greet you.\n\n  [17] I appeal to you, brothers, to watch out for those who cause divisions and create obstacles contrary to the doctrine that you have been taught; avoid them. [18] For such persons do not serve our Lord Christ, but their own appetites, and by smooth talk and flattery they deceive the hearts of the naive. [19] For your obedience is known to all, so that I rejoice over you, but I want you to be wise as to what is good and innocent as to what is evil. [20] The God of peace will soon crush Satan under your feet. The grace of our Lord Jesus Christ be with you.\n\n  [21] Timothy, my fellow worker, greets you; so do Lucius and Jason and Sosipater, my kinsmen.\n\n  [22] I Tertius, who wrote this letter, greet you in the Lord.\n\n  [23] Gaius, who is host to me and to the whole church, greets you. Erastus, the city treasurer, and our brother Quartus, greet you.\n\n  [25] Now to him who is able to strengthen you according to my gospel and the preaching of Jesus Christ, according to the revelation of the mystery that was kept secret for long ages [26] but has now been disclosed and through the prophetic writings has been made known to all nations, according to the command of the eternal God, to bring about the obedience of faith—[27] to the only wise God be glory forevermore through Jesus Christ! Amen.']
        evening_psalms = [{'psalm_section': '7', 'psalm_text': 'A Shiggaion of David, which he sang to the LORD concerning the words of Cush, a Benjaminite.\n\n    [1] O LORD my God, in you do I take refuge;\n        save me from all my pursuers and deliver me,\n    [2] lest like a lion they tear my soul apart,\n        rending it in pieces, with none to deliver.\n    \n    \n    [3] O LORD my God, if I have done this,\n        if there is wrong in my hands,\n    [4] if I have repaid my friend with evil\n        or plundered my enemy without cause,\n    [5] let the enemy pursue my soul and overtake it,\n        and let him trample my life to the ground\n        and lay my glory in the dust. Selah\n    \n    \n    [6] Arise, O LORD, in your anger;\n        lift yourself up against the fury of my enemies;\n        awake for me; you have appointed a judgment.\n    [7] Let the assembly of the peoples be gathered about you;\n        over it return on high.\n    \n    \n    [8] The LORD judges the peoples;\n        judge me, O LORD, according to my righteousness\n        and according to the integrity that is in me.\n    [9] Oh, let the evil of the wicked come to an end,\n        and may you establish the righteous—\n    you who test the minds and hearts,\n        O righteous God!\n    [10] My shield is with God,\n        who saves the upright in heart.\n    [11] God is a righteous judge,\n        and a God who feels indignation every day.\n    \n    \n    [12] If a man does not repent, God will whet his sword;\n        he has bent and readied his bow;\n    [13] he has prepared for him his deadly weapons,\n        making his arrows fiery shafts.\n    [14] Behold, the wicked man conceives evil\n        and is pregnant with mischief\n        and gives birth to lies.\n    [15] He makes a pit, digging it out,\n        and falls into the hole that he has made.\n    [16] His mischief returns upon his own head,\n        and on his own skull his violence descends.\n    \n    \n    [17] I will give to the LORD the thanks due to his righteousness,\n        and I will sing praise to the name of the LORD, the Most High.', 'psalm_verses': [{'verse': '1', 'text': ['O LORD my God, in you do I take refuge;', '        save me from all my pursuers and deliver me,']}, {'verse': '2', 'text': ['lest like a lion they tear my soul apart,', '        rending it in pieces, with none to deliver.']}, {'verse': '3', 'text': ['O LORD my God, if I have done this,', '        if there is wrong in my hands,']}, {'verse': '4', 'text': ['if I have repaid my friend with evil', '        or plundered my enemy without cause,']}, {'verse': '5', 'text': ['let the enemy pursue my soul and overtake it,', '        and let him trample my life to the ground', '        and lay my glory in the dust. Selah']}, {'verse': '6', 'text': ['Arise, O LORD, in your anger;', '        lift yourself up against the fury of my enemies;', '        awake for me; you have appointed a judgment.']}, {'verse': '7', 'text': ['Let the assembly of the peoples be gathered about you;', '        over it return on high.']}, {'verse': '8', 'text': ['The LORD judges the peoples;', '        judge me, O LORD, according to my righteousness', '        and according to the integrity that is in me.']}, {'verse': '9', 'text': ['Oh, let the evil of the wicked come to an end,', '        and may you establish the righteous—', '    you who test the minds and hearts,', '        O righteous God!']}, {'verse': '10', 'text': ['My shield is with God,', '        who saves the upright in heart.']}, {'verse': '11', 'text': ['God is a righteous judge,', '        and a God who feels indignation every day.']}, {'verse': '12', 'text': ['If a man does not repent, God will whet his sword;', '        he has bent and readied his bow;']}, {'verse': '13', 'text': ['he has prepared for him his deadly weapons,', '        making his arrows fiery shafts.']}, {'verse': '14', 'text': ['Behold, the wicked man conceives evil', '        and is pregnant with mischief', '        and gives birth to lies.']}, {'verse': '15', 'text': ['He makes a pit, digging it out,', '        and falls into the hole that he has made.']}, {'verse': '16', 'text': ['His mischief returns upon his own head,', '        and on his own skull his violence descends.']}, {'verse': '17', 'text': ['I will give to the LORD the thanks due to his righteousness,', '        and I will sing praise to the name of the LORD, the Most High.']}]}]

        target = {'statusCode': 200, 'body': {'evening': evening_lessons, 'evening-psalms': evening_psalms}}
        output = lambda_handler({'date': '2019-03-04', 'office': 'evening'}, None)
        self.assertEqual(output, target)

    def test_apocrypha(self):

        evening_lessons = ['There was a man living in Babylon whose name was Joakim.  He married the daughter of Hilkiah, named Susanna, a very beautiful woman and one who feared the Lord.  Her parents were righteous, and had trained their daughter according to the law of Moses.  Joakim was very rich, and had a fine garden adjoining his house; the Jews used to come to him because he was the most honored of them all.  That year two elders from the people were appointed as judges. Concerning them the Lord had said: "Wickedness came forth from Babylon, from elders who were judges, who were supposed to govern the people."  These men were frequently at Joakim\'s house, and all who had a case to be tried came to them there.  When the people left at noon, Susanna would go into her husband\'s garden to walk.  Every day the two elders used to see her, going in and walking about, and they began to lust for her.  They suppressed their consciences and turned away their eyes from looking to Heaven or remembering their duty to administer justice.  Both were overwhelmed with passion for her, but they did not tell each other of their distress,  for they were ashamed to disclose their lustful desire to seduce her.  Day after day they watched eagerly to see her.  One day they said to each other, "Let us go home, for it is time for lunch." So they both left and parted from each other.  But turning back, they met again; and when each pressed the other for the reason, they confessed their lust. Then together they arranged for a time when they could find her alone.  Once, while they were watching for an opportune day, she went in as before with only two maids, and wished to bathe in the garden, for it was a hot day.  No one was there except the two elders, who had hidden themselves and were watching her.  She said to her maids, "Bring me olive oil and ointments, and shut the garden doors so that I can bathe."  They did as she told them: they shut the doors of the garden and went out by the side doors to bring what they had been commanded; they did not see the elders, because they were hiding.  When the maids had gone out, the two elders got up and ran to her.  They said, "Look, the garden doors are shut, and no one can see us. We are burning with desire for you; so give your consent, and lie with us.  If you refuse, we will testify against you that a young man was with you, and this was why you sent your maids away." Susanna groaned and said, "I am completely trapped. For if I do this, it will mean death for me; if I do not, I cannot escape your hands.  I choose not to do it; I will fall into your hands, rather than sin in the sight of the Lord." Then Susanna cried out with a loud voice, and the two elders shouted against her.  And one of them ran and opened the garden doors.  When the people in the house heard the shouting in the garden, they rushed in at the side door to see what had happened to her.  And when the elders told their story, the servants felt very much ashamed, for nothing like this had ever been said about Susanna.  The next day, when the people gathered at the house of her husband Joakim, the two elders came, full of their wicked plot to have Susanna put to death. In the presence of the people they said,  "Send for Susanna daughter of Hilkiah, the wife of Joakim."  So they sent for her. And she came with her parents, her children, and all her relatives.  Now Susanna was a woman of great refinement and beautiful in appearance.  As she was veiled, the scoundrels ordered her to be unveiled, so that they might feast their eyes on her beauty.  Those who were with her and all who saw her were weeping.  Then the two elders stood up before the people and laid their hands on her head.  Through her tears she looked up toward Heaven, for her heart trusted in the Lord.  The elders said, "While we were walking in the garden alone, this woman came in with two maids, shut the garden doors, and dismissed the maids.  Then a young man, who was hiding there, came to her and lay with her.  We were in a corner of the garden, and when we saw this wickedness we ran to them.  Although we saw them embracing, we could not hold the man, because he was stronger than we, and he opened the doors and got away.  We did, however, seize this woman and asked who the young man was,  but she would not tell us. These things we testify." Because they were elders of the people and judges, the assembly believed them and condemned her to death.  Then Susanna cried out with a loud voice, and said, "O eternal God, you know what is secret and are aware of all things before they come to be;  you know that these men have given false evidence against me. And now I am to die, though I have done none of the wicked things that they have charged against me!" The Lord heard her cry.  Just as she was being led off to execution, God stirred up the holy spirit of a young lad named Daniel,  and he shouted with a loud voice, "I want no part in shedding this woman\'s blood!" All the people turned to him and asked, "What is this you are saying?"  Taking his stand among them he said, "Are you such fools, O Israelites, as to condemn a daughter of Israel without examination and without learning the facts?  Return to court, for these men have given false evidence against her." So all the people hurried back. And the rest of the elders said to him, "Come, sit among us and inform us, for God has given you the standing of an elder."  Daniel said to them, "Separate them far from each other, and I will examine them." When they were separated from each other, he summoned one of them and said to him, "You old relic of wicked days, your sins have now come home, which you have committed in the past,  pronouncing unjust judgments, condemning the innocent and acquitting the guilty, though the Lord said, \'You shall not put an innocent and righteous person to death.\'  Now then, if you really saw this woman, tell me this: Under what tree did you see them being intimate with each other?" He answered, "Under a mastic tree."  And Daniel said, "Very well! This lie has cost you your head, for the angel of God has received the sentence from God and will immediately cut you in two." Then, putting him to one side, he ordered them to bring the other. And he said to him, "You offspring of Canaan and not of Judah, beauty has beguiled you and lust has perverted your heart.  This is how you have been treating the daughters of Israel, and they were intimate with you through fear; but a daughter of Judah would not tolerate your wickedness.  Now then, tell me: Under what tree did you catch them being intimate with each other?" He answered, "Under an evergreen oak."  Daniel said to him, "Very well! This lie has cost you also your head, for the angel of God is waiting with his sword to split you in two, so as to destroy you both." Then the whole assembly raised a great shout and blessed God, who saves those who hope in him.  And they took action against the two elders, because out of their own mouths Daniel had convicted them of bearing false witness; they did to them as they had wickedly planned to do to their neighbor.  Acting in accordance with the law of Moses, they put them to death. Thus innocent blood was spared that day.  Hilkiah and his wife praised God for their daughter Susanna, and so did her husband Joakim and all her relatives, because she was found innocent of a shameful deed.  And from that day onward Daniel had a great reputation among the people.', '[1] So Agrippa said to Paul, “You have permission to speak for yourself.” Then Paul stretched out his hand and made his defense:\n\n  [2] “I consider myself fortunate that it is before you, King Agrippa, I am going to make my defense today against all the accusations of the Jews, [3] especially because you are familiar with all the customs and controversies of the Jews. Therefore I beg you to listen to me patiently.\n\n  [4] “My manner of life from my youth, spent from the beginning among my own nation and in Jerusalem, is known by all the Jews. [5] They have known for a long time, if they are willing to testify, that according to the strictest party of our religion I have lived as a Pharisee. [6] And now I stand here on trial because of my hope in the promise made by God to our fathers, [7] to which our twelve tribes hope to attain, as they earnestly worship night and day. And for this hope I am accused by Jews, O king! [8] Why is it thought incredible by any of you that God raises the dead?\n\n  [9] “I myself was convinced that I ought to do many things in opposing the name of Jesus of Nazareth. [10] And I did so in Jerusalem. I not only locked up many of the saints in prison after receiving authority from the chief priests, but when they were put to death I cast my vote against them. [11] And I punished them often in all the synagogues and tried to make them blaspheme, and in raging fury against them I persecuted them even to foreign cities.\n\n  [12] “In this connection I journeyed to Damascus with the authority and commission of the chief priests. [13] At midday, O king, I saw on the way a light from heaven, brighter than the sun, that shone around me and those who journeyed with me. [14] And when we had all fallen to the ground, I heard a voice saying to me in the Hebrew language, ‘Saul, Saul, why are you persecuting me? It is hard for you to kick against the goads.’ [15] And I said, ‘Who are you, Lord?’ And the Lord said, ‘I am Jesus whom you are persecuting. [16] But rise and stand upon your feet, for I have appeared to you for this purpose, to appoint you as a servant and witness to the things in which you have seen me and to those in which I will appear to you, [17] delivering you from your people and from the Gentiles—to whom I am sending you [18] to open their eyes, so that they may turn from darkness to light and from the power of Satan to God, that they may receive forgiveness of sins and a place among those who are sanctified by faith in me.’\n\n  [19] “Therefore, O King Agrippa, I was not disobedient to the heavenly vision, [20] but declared first to those in Damascus, then in Jerusalem and throughout all the region of Judea, and also to the Gentiles, that they should repent and turn to God, performing deeds in keeping with their repentance. [21] For this reason the Jews seized me in the temple and tried to kill me. [22] To this day I have had the help that comes from God, and so I stand here testifying both to small and great, saying nothing but what the prophets and Moses said would come to pass: [23] that the Christ must suffer and that, by being the first to rise from the dead, he would proclaim light both to our people and to the Gentiles.”\n\n  [24] And as he was saying these things in his defense, Festus said with a loud voice, “Paul, you are out of your mind; your great learning is driving you out of your mind.” [25] But Paul said, “I am not out of my mind, most excellent Festus, but I am speaking true and rational words. [26] For the king knows about these things, and to him I speak boldly. For I am persuaded that none of these things has escaped his notice, for this has not been done in a corner. [27] King Agrippa, do you believe the prophets? I know that you believe.” [28] And Agrippa said to Paul, “In a short time would you persuade me to be a Christian?” [29] And Paul said, “Whether short or long, I would to God that not only you but also all who hear me this day might become such as I am—except for these chains.”\n\n  [30] Then the king rose, and the governor and Bernice and those who were sitting with them. [31] And when they had withdrawn, they said to one another, “This man is doing nothing to deserve death or imprisonment.” [32] And Agrippa said to Festus, “This man could have been set free if he had not appealed to Caesar.”']
        evening_psalms = [{'psalm_section': '10', 'psalm_text': '[1] Why, O LORD, do you stand far away?\n        Why do you hide yourself in times of trouble?\n    \n    \n    [2] In arrogance the wicked hotly pursue the poor;\n        let them be caught in the schemes that they have devised.\n    [3] For the wicked boasts of the desires of his soul,\n        and the one greedy for gain curses and renounces the LORD.\n    [4] In the pride of his face the wicked does not seek him;\n        all his thoughts are, “There is no God.”\n    [5] His ways prosper at all times;\n        your judgments are on high, out of his sight;\n        as for all his foes, he puffs at them.\n    [6] He says in his heart, “I shall not be moved;\n        throughout all generations I shall not meet adversity.”\n    [7] His mouth is filled with cursing and deceit and oppression;\n        under his tongue are mischief and iniquity.\n    [8] He sits in ambush in the villages;\n        in hiding places he murders the innocent.\n    His eyes stealthily watch for the helpless;\n    [9]     he lurks in ambush like a lion in his thicket;\n    he lurks that he may seize the poor;\n        he seizes the poor when he draws him into his net.\n    [10] The helpless are crushed, sink down,\n        and fall by his might.\n    [11] He says in his heart, “God has forgotten,\n        he has hidden his face, he will never see it.”\n    \n    \n    [12] Arise, O LORD; O God, lift up your hand;\n        forget not the afflicted.\n    [13] Why does the wicked renounce God\n        and say in his heart, “You will not call to account”?\n    [14] But you do see, for you note mischief and vexation,\n        that you may take it into your hands;\n    to you the helpless commits himself;\n        you have been the helper of the fatherless.\n    [15] Break the arm of the wicked and evildoer;\n        call his wickedness to account till you find none.\n    \n    \n    [16] The LORD is king forever and ever;\n        the nations perish from his land.\n    [17] O LORD, you hear the desire of the afflicted;\n        you will strengthen their heart; you will incline your ear\n    [18] to do justice to the fatherless and the oppressed,\n        so that man who is of the earth may strike terror no more.', 'psalm_verses': [{'verse': '1', 'text': ['Why, O LORD, do you stand far away?', '        Why do you hide yourself in times of trouble?']}, {'verse': '2', 'text': ['In arrogance the wicked hotly pursue the poor;', '        let them be caught in the schemes that they have devised.']}, {'verse': '3', 'text': ['For the wicked boasts of the desires of his soul,', '        and the one greedy for gain curses and renounces the LORD.']}, {'verse': '4', 'text': ['In the pride of his face the wicked does not seek him;', '        all his thoughts are, “There is no God.”']}, {'verse': '5', 'text': ['His ways prosper at all times;', '        your judgments are on high, out of his sight;', '        as for all his foes, he puffs at them.']}, {'verse': '6', 'text': ['He says in his heart, “I shall not be moved;', '        throughout all generations I shall not meet adversity.”']}, {'verse': '7', 'text': ['His mouth is filled with cursing and deceit and oppression;', '        under his tongue are mischief and iniquity.']}, {'verse': '8', 'text': ['He sits in ambush in the villages;', '        in hiding places he murders the innocent.', '    His eyes stealthily watch for the helpless;']}, {'verse': '9', 'text': ['he lurks in ambush like a lion in his thicket;', '    he lurks that he may seize the poor;', '        he seizes the poor when he draws him into his net.']}, {'verse': '10', 'text': ['The helpless are crushed, sink down,', '        and fall by his might.']}, {'verse': '11', 'text': ['He says in his heart, “God has forgotten,', '        he has hidden his face, he will never see it.”']}, {'verse': '12', 'text': ['Arise, O LORD; O God, lift up your hand;', '        forget not the afflicted.']}, {'verse': '13', 'text': ['Why does the wicked renounce God', '        and say in his heart, “You will not call to account”?']}, {'verse': '14', 'text': ['But you do see, for you note mischief and vexation,', '        that you may take it into your hands;', '    to you the helpless commits himself;', '        you have been the helper of the fatherless.']}, {'verse': '15', 'text': ['Break the arm of the wicked and evildoer;', '        call his wickedness to account till you find none.']}, {'verse': '16', 'text': ['The LORD is king forever and ever;', '        the nations perish from his land.']}, {'verse': '17', 'text': ['O LORD, you hear the desire of the afflicted;', '        you will strengthen their heart; you will incline your ear']}, {'verse': '18', 'text': ['to do justice to the fatherless and the oppressed,', '        so that man who is of the earth may strike terror no more.']}]}]
        target = {'statusCode': 200, 'body': {'evening': evening_lessons, 'evening-psalms': evening_psalms}}
        output = lambda_handler({'date': '2019-07-04', 'office': 'evening'}, None)
        self.assertEqual(output, target)

unittest.main()
