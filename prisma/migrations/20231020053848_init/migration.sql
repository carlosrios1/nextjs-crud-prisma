-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "titule" TEXT NOT NULL,
    "description" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
