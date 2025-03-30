
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Download, DownloadCloud, Users, Calendar, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';

// This component would be used in the React version of the site
const TorrentDetail = () => {
  const { id } = useParams();

  // Mock data - in a real app, you would fetch from an API
  const torrent = {
    id: id,
    title: 'Dune Part Two (2024) [2160p] [4K] [BluRay] [x265]',
    category: 'Movies',
    seeds: 2451,
    leechers: 732,
    size: '28.4 GB',
    uploadDate: '16 May 2024',
    uploader: 'RARBG',
    isVerified: true,
    description: 'Dune: Part Two explores the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.',
    imdbRating: '8.6/10',
    genre: 'Sci-Fi, Adventure, Drama',
    director: 'Denis Villeneuve',
    cast: 'Timothée Chalamet, Zendaya, Rebecca Ferguson',
    language: 'English',
    magnet: 'magnet:?xt=urn:btih:1a2b3c4d5e6f7g8h9i0j&dn=Dune.Part.Two.2024.2160p.4K.BluRay.x265',
    fileName: 'Dune.Part.Two.2024.2160p.4K.BluRay.x265.torrent'
  };

  // Calculate health percentage
  const healthPercentage = Math.min(100, (torrent.seeds / (torrent.seeds + torrent.leechers)) * 100);

  return (
    <div className="container py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">{torrent.title}</h1>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{torrent.category}</Badge>
          {torrent.isVerified && (
            <Badge variant="secondary" className="text-green-500 flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3" /> Verified
            </Badge>
          )}
          <span className="text-sm text-muted-foreground">
            Uploaded: {torrent.uploadDate} by <Link to="#" className="text-primary">{torrent.uploader}</Link>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{torrent.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                {torrent.imdbRating && (
                  <div>
                    <strong>IMDb Rating:</strong> {torrent.imdbRating}
                  </div>
                )}
                {torrent.genre && (
                  <div>
                    <strong>Genre:</strong> {torrent.genre}
                  </div>
                )}
                {torrent.director && (
                  <div>
                    <strong>Director:</strong> {torrent.director}
                  </div>
                )}
                {torrent.cast && (
                  <div>
                    <strong>Cast:</strong> {torrent.cast}
                  </div>
                )}
                {torrent.language && (
                  <div>
                    <strong>Language:</strong> {torrent.language}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Comments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">No comments yet. Be the first to comment!</p>
              <Textarea placeholder="Write a comment..." className="min-h-[100px]" />
              <Button className="mt-2">Post Comment</Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Download</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="default" className="w-full" asChild>
                  <a href={torrent.magnet}>
                    <Download className="mr-2 h-4 w-4" /> Magnet Download
                  </a>
                </Button>
                
                <Button variant="secondary" className="w-full" asChild>
                  <Link to={`/download/${torrent.id}`}>
                    <DownloadCloud className="mr-2 h-4 w-4" /> Download Torrent File
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">{torrent.seeds.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Seeds</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">{torrent.leechers.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Leechers</div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Size:</span>
                  <span>{torrent.size}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Category:</span>
                  <span>{torrent.category}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Uploaded:</span>
                  <span>{torrent.uploadDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Uploader:</span>
                  <span>{torrent.uploader}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Health</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={healthPercentage} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Poor</span>
                <span>Excellent</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TorrentDetail;
