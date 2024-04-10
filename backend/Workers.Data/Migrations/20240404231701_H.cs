using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Workers.Data.Migrations
{
    public partial class H : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Roles_Tags_NameId",
                table: "Roles");

            migrationBuilder.DropForeignKey(
                name: "FK_Roles_Workers_WorkerId",
                table: "Roles");

            migrationBuilder.DropIndex(
                name: "IX_Roles_NameId",
                table: "Roles");

            migrationBuilder.RenameColumn(
                name: "NameId",
                table: "Roles",
                newName: "TagRoleId");

            migrationBuilder.AlterColumn<int>(
                name: "WorkerId",
                table: "Roles",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Roles_Workers_WorkerId",
                table: "Roles",
                column: "WorkerId",
                principalTable: "Workers",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Roles_Workers_WorkerId",
                table: "Roles");

            migrationBuilder.RenameColumn(
                name: "TagRoleId",
                table: "Roles",
                newName: "NameId");

            migrationBuilder.AlterColumn<int>(
                name: "WorkerId",
                table: "Roles",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Roles_NameId",
                table: "Roles",
                column: "NameId");

            migrationBuilder.AddForeignKey(
                name: "FK_Roles_Tags_NameId",
                table: "Roles",
                column: "NameId",
                principalTable: "Tags",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Roles_Workers_WorkerId",
                table: "Roles",
                column: "WorkerId",
                principalTable: "Workers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
