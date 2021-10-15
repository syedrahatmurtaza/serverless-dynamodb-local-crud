export const dynamodb = {
  stages: ["dev"],
  start: {
    port: 8000,
    inMemory: true,
    sharedDb: true,
    heapInitial: "200m",
    heapMax: "1g",
    migrate: true,
    // seed: true,
    convertEmptyValues: true,
  },
  // seed: {
  //   domain: {
  //     sources: [
  //       {
  //         table: 'usersTable',
  //         sources: [`./config/usersTable.migration.json`],
  //       },
  //     ],
  //   },
  // },
  migration: { dir: "../database/migrations" },
};
