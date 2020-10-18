import {expect} from 'chai'
import { removeDiacriticalMarks } from "../index"

describe('removeDiacriticalMarks', function () {
    const diacritics = ['ò', 'ó', 'ô', 'õ', 'ō', 'o̅', 'ŏ', 'ȯ', 'ö', 'ỏ', 'o̊', 'ő', 'ǒ', 'o̍', 'o̎', 'ȍ', 'o̐', 'ȏ', 'o̒', 'o̓', 'o̔', 'o̕', 'o̖', 'o̗', 'o̘', 'o̙', 'o̚', 'ơ', 'o̜', 'o̝', 'o̞', 'o̟', 'o̠', 'o̡', 'o̢', 'ọ', 'o̤', 'o̥', 'o̦', 'o̧', 'ǫ', 'o̩', 'o̪', 'o̫', 'o̬', 'o̭', 'o̮', 'o̯', 'o̰', 'o̱', 'o̲', 'o̳', 'o̴', 'o̵', 'o̶', 'o̷', 'o̸', 'o̹', 'o̺', 'o̻', 'o̼', 'o̽', 'o̾', 'o̿', 'ò', 'ó', 'o͂', 'o̓', 'ö́', 'oͅ', 'o͆', 'o͇', 'o͈', 'o͉', 'o͊', 'o͋', 'o͌', 'o͍', 'o͎', 'o͏', 'o͐', 'o͑', 'o͒', 'o͓', 'o͔', 'o͕', 'o͖', 'o͗', 'o͘', 'o͙', 'o͚', 'o͛', '͜o', '͝o', '͞o', '͟o', '͠o', '͡o', '͢o', 'oͣ', 'oͤ', 'oͥ', 'oͦ', 'oͧ', 'oͨ', 'oͩ', 'oͪ', 'oͫ', 'oͬ', 'oͭ', 'oͮ', 'oͯ']

    diacritics.forEach(function(value) {
        describe(`Given the character ${value} with diacritic`, function () {
            const characterWithoutDiacritics : string = 'o'

            it(`should return the character ${characterWithoutDiacritics}`, function() {
                const processedText : string = removeDiacriticalMarks(value)

                expect(processedText).to.be.eql(characterWithoutDiacritics);
            })
        })
    })
})

