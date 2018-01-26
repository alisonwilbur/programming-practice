/**
 * Solution to a practice problem to write a function that will return
 * the index of the first nonrepeated character in a string.
 * 
 * Ex: The first nonrepeated character in “total” is 'o' at index 1
 *     The first nonrepeated character in “teeter” is 'r' at index 5
 * 
 * From Programming Interviews Exposed, Chapter 6: Arrays & Strings
 */
 
public class MyClass {
	static int firstNonRepeating(String str) {
	    java.util.Map<Character, Integer> characterToFirstIndex = new java.util.HashMap<Character, Integer>();
	    
		for (int i = 0; i < str.length(); i++) {
		    Character curr = str.charAt(i);

			if (characterToFirstIndex.containsKey(curr)) {
        		System.out.println("Character is " + curr + " and it was already in the array");
				characterToFirstIndex.put(curr, -1);
			} else {
        		System.out.println("Character is " + curr + " and this is the first instance of it at index " + i);
			    characterToFirstIndex.put(curr, i);
			}
		} 

		System.out.println("Finished building map of character indexed, which is: " + characterToFirstIndex.toString());

	    int lowestIndex = 1000000;
	    Character lowestCharacter = null;
		for (Character character : characterToFirstIndex.keySet()) {
		    int characterIndex = characterToFirstIndex.get(character);
			if (characterIndex != -1 && characterIndex < lowestIndex) {
			    lowestIndex = characterIndex;
			    lowestCharacter = character;
			}
		} 

	    return lowestIndex;
	}

	// Driver method
	public static void main (String[] args)
	{
		String str = "geeksforgeeks";
		int index = firstNonRepeating(str);
		
		System.out.println(index == -1 ? "Either all characters are repeating or string " +
				"is empty" : "First non-repeating character is " + str.charAt(index));
	}
}
