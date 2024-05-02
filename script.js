function calculateMinCost() {
  //your code here
  import heapq
def ConnectRope(ropes):
    heapq.heapify(ropes)
    res = 0
    while len(ropes) > 1:
        cur = heapq.heappop(ropes)+heapq.heappop(ropes)
        heapq.heappush(ropes, cur)
        res += cur
    return res

ropes = [4, 2, 7, 6, 9]
print(ConnectRope(ropes))

  
  
}  
