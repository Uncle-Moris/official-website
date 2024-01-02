package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html/v2"
)

func main() {

	engine := html.New("./templates", ".html")

	app := fiber.New(fiber.Config{
		Views: engine,
	})
	app.Static("/", "./static")

	app.Get("/", func(c *fiber.Ctx) error {
		// Render index
		return c.Render("index", fiber.Map{})
	})

	app.Get("/blog", func(c *fiber.Ctx) error {
		// Render index
		return c.Render("blog", fiber.Map{})
	})

	log.Fatal(app.Listen(":3000"))
}
