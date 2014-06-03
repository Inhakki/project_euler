class FizzBuzzSum

  def initialize(first, second, max)
    @max = max
    @first = first
    @second = second
  end

  def getsum
    sum = 0
    @max.times {
      |current|
      if current % @first == 0 || current % @second == 0
        sum += current
      end
    }
    sum
  end
end

calc = FizzBuzzSum.new(3, 5, 1000)
puts calc.getsum
