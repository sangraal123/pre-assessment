def print_times_table():
    # Create the top header row
    header = ["X"] + list(range(1, 13))
    print("{: >3} ".format(header[0]) + " ".join("{: >2}".format(i) for i in header[1:]))

    # Create each row of the times table
    for row in range(1, 13):
        # Start with the row header
        print("{: >2} ".format(row), end='')
        for col in range(1, 13):
            # Print each column with proper spacing
            print("{: >3}".format(row * col), end=' ')
        print()  # Newline at the end of each row

# Call the function to print the times table
print_times_table()
