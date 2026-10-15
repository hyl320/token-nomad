#include <gtest/gtest.h>

#include "loomlog/thread_pool.hpp"   // 替换成你的真实被测头文件

// 黄金测试样板：严格复刻下面的结构（TEST + AAA + EXPECT/ASSERT）。

TEST(ThreadPool, SubmitReturnsValue) {
  // 1. Arrange（准备被测对象与输入）
  loom::ThreadPool pool(2);

  // 2. Act（执行被测行为）
  auto fut = pool.submit([] { return 41 + 1; });
  const int result = fut.get();

  // 3. Assert（断言预期结果）
  EXPECT_EQ(result, 42);

  pool.shutdown();
}

TEST(ThreadPool, ShutdownIsIdempotent) {
  // 1. Arrange
  loom::ThreadPool pool(1);

  // 2. Act + 3. Assert（shutdown 连续调用三次不卡死、不抛异常）
  EXPECT_NO_THROW(pool.shutdown());
  EXPECT_NO_THROW(pool.shutdown());
  EXPECT_NO_THROW(pool.shutdown());
}
