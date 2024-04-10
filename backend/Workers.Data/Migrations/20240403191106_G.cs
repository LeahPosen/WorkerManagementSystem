using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Workers.Data.Migrations
{
    public partial class G : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Roles_Workers_WorkerId",
                table: "Roles");

            migrationBuilder.AlterColumn<int>(
                name: "WorkerId",
                table: "Roles",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Roles_Workers_WorkerId",
                table: "Roles",
                column: "WorkerId",
                principalTable: "Workers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Roles_Workers_WorkerId",
                table: "Roles");

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
    }
}
