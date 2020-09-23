function swap(array, idx1, idx2) {
	let temp = array[idx1]; // save a copy of the first value
	array[idx1] = array[idx2]; // overwrite the first value with the second value
	array[idx2] = temp; // overwrite the second value with the first value
}

// Use this pseudocode to implement the bubble sort

function bubbleSort(array) {
	// n := length(array)
	const n = array.length;
	// repeat
	let swapped = false;
	//  swapped = false
	//  for i := 1 to n - 1 inclusive do
	for (let i = 0; i < n - 1; i++) {
		if (array[i - 1] > array[i]) {
			swap(array, i - 1, i);
			swapped = true;
		}
		return array;
	}
	if ((swapped = true)) {
		//go into for loop again and compare values
	}

	//
	//     /* if this pair is out of order */
	//     if A[i - 1] > A[i] then
	//
	//       /* swap them and remember something changed */
	//       swap(A[i - 1], A[i])
	//       swapped := true
	//
	//     end if
	//   end for
	// until not swapped
}

module.exports = {
	bubbleSort,
	swap,
};
