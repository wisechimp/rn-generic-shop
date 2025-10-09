## Problems encountered during development

So when building the header (list-header) component there was a problem with being able to press on the link for the shopping cart and so open the modal. It seemed that the pressable's view was preventing the link being selected. A quick search revealed the following [issue](https://github.com/expo/expo/issues/23619) in the expo project. Not the r