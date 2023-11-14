for tc in range(1,int(input())+1):
    arr = list(map(int, input().split()))
    arr.sort()
    s = set(arr)

    for idx, i in enumerate(s):
        if idx == 0 or idx == len(s)-1:
            arr.remove(i)

    avg = sum(arr)/len(arr)
    print(f"#{tc} {round(avg)}")