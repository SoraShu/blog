import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FriendCardProps {
  name: string;
  url: string;
  avatar?: string;
  description?: string;
}

export function FriendCard({ name, url, avatar, description }: FriendCardProps) {
  const fallback = name.slice(0, 2).toUpperCase();

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block group">
      <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted">
              {avatar ? (
                <img src={avatar} alt={name} className="aspect-square h-full w-full object-cover" />
              ) : (
                <span className="flex h-full w-full items-center justify-center text-sm font-medium">
                  {fallback}
                </span>
              )}
            </div>
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {name}
            </CardTitle>
          </div>
        </CardHeader>
        {description && (
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          </CardContent>
        )}
      </Card>
    </a>
  );
}
